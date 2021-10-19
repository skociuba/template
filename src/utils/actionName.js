const actionName = (action) =>
  action.reduce((names, name) => {
    names[name] = name
    return names
  }, {})

export default actionName
