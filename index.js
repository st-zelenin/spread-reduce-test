

document.getElementById('test_spread').addEventListener('click', () => withSpread())
document.getElementById('test_push').addEventListener('click', () => withPush())

function withSpread() {
  const arr = Array(1000).fill(1)

  console.time('spread')

  arr.reduce((res, curr) => {
    return [
      ...res,
      curr + 1
    ]
  }, [])

  console.timeEnd('spread')
}

function withPush() {
  const arr = Array(1000).fill(1)

  console.time('push')

  arr.reduce((res, curr) => {
    res.push(curr + 1)

    return res
  }, [])

  console.timeEnd('push')
}