exports.middleware = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

// const passProps = (uid, parentProps, props) => Object.assign(
//   {},
//   props,
//   { myOpenNewTab: parentProps.myOpenNewTab }
// )

// exports.getTermGroupProps = passProps;
// exports.getTermProps = passProps;

// exports.mapHeaderDispatch = (dispatch, m) => Object.assign({}, m, {
//   myOpenNewTab() {
//     dispatch({
//         type: 'SESSION_ADD'
//     })
//   }
// })

// exports.mapTermsDispatch = (dispatch, m) => Object.assign({}, m, {
//   myOpenNewTab() {
//     dispatch({
//        type: 'SESSION_ADD'
//     })
//   }
// })