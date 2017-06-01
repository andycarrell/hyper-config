const push = cwd => store.dispatch({ type: 'SESSION_SET_CWD', cwd });

exports.middleware = store => next => action => {
  const { type, config } = action;

  if (type === 'CONFIG_LOAD' || type === 'CONFIG_RELOAD') {
    push(config.workingDirectory || process.env.HOME);
  }

  next(action);
};
