function materializeProps(data) {
  const realizedData = {}
  for (const key in data) {
    if (typeof data[key] === 'function') {
      // execute now and store returned value
      realizedData[key] = data[key].call(data)
    } else {
      // otherwise, just store the value as is
      realizedData[key] = data[key]
    }
  }
  return realizedData
}

module.exports = {
  materializeProps
}