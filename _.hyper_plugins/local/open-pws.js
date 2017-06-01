// 'C:/Windows/System32/WindowsPowershell/v1.0/powershell.exe'
// On initial load set powershell path
let pwsPath;

exports.middleware = store => next => action => {
  const { type, config } = action;

  if (type === 'CONFIG_LOAD' || type === 'CONFIG_RELOAD') {
    pwsPath = config.pwsPath;
  }

  next(action);
};

// `ctrl + y` bc it is by `t` 
const isOpeningPowerShell = e => e.keyCode === 89 && e.ctrlKey;

exports.decorateTerm = (Term, { React }) => {
  return class extends React.Component {
    constructor (props, context) {
      super(props, context);
      this._onTerminal = this._onTerminal.bind(this);
    }

    _onTerminal (term) {
      if (this.props && this.props.onTerminal) this.props.onTerminal(term);

      term.uninstallKeyboard();

      const pwsShellHandler = [
          'keydown',
          e => {
            if (pwsPath && isOpeningPowerShell(e)) {
              e.preventDefault();
              term.io.sendString(`reset && ${pwsPath} \r`);
            }
          }
      ];

      term.keyboard.handlers_ = [ 
          pwsShellHandler,
          ...term.keyboard.handlers_
      ];

      term.installKeyboard();
    }

    render () {
      return React.createElement(Term, Object.assign({}, this.props, {
        onTerminal: this._onTerminal
      }))
    }
  }
}
