const extensions = [{firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}, {
  firstName: 'xxx1',
  ext: 'xxx',
  extType: 'xxx'
}]

function sortExtensionsByName ([extensions, ...keys]) {
  if (!keys.lenght) throw 'input sort key'
  extensions.sort(keys[0])
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

sortExtensionsByName(extensions, 'firstName', 'lastName', 'ext')