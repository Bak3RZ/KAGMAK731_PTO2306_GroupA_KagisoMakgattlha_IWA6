const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

const primaryValid = typeof primaryPhone === 'string' && /^\d+$/.test(primaryPhone)
const secondaryValid = typeof secondaryPhone === 'string' && /^\d+$/.test(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )