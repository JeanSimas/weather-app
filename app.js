// Watch the Call Stack, Callback Queue, and Event Loop class

console.log('Starting')
setTimeout(() => {
    console.log('0 seconds')
}, 0)
setTimeout(() => {
    console.log('2 seconds')
}, 2000)

