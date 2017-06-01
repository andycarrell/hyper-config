const push = cwd => store.dispatch({ type: 'SESSION_SET_CWD', cwd })

exports.middleware = store => next => action => {
  const {
    type,
    config: { workingDirectory }
  } = action

  if (type === 'CONFIG_LOAD' || type === 'CONFIG_RELOAD') {
    push(workingDirectory || process.env.HOME)
  }

  next(action);
};