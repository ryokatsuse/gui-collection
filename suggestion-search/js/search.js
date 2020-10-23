
export const prefData = 'assets/pref.json'

export const fecthPrefData = (prefData, callback) => {
  let data = []
  fetch(prefData)
    .then(res => res.json())
    .then(result => data = result)
    .then(() => callback(data))
}

export const setData = (prefData) => {
  console.log(prefData)
}