// ================================
// utils class
// ================================

// filter about [ "" || null || undefined ]
export function filterObject (obj) {
  var param = {}
  if (obj === null || obj === undefined || obj === '') return param
  for (var key in obj) {
    if (dataType(obj[key]) === 'Object') {
      param[key] = filterObject(obj[key])
    } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      param[key] = obj[key]
    }
  }
  return param
}

function dataType (obj) {
  if (obj === null) return 'Null'
  if (obj === undefined) return 'Undefined'
  return Object.prototype.toString.call(obj).slice(8, -1)
}
