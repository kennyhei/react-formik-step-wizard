export function buildHashSteps(steps) {
  const hashes = {}
  steps.forEach(step => {
    const hash = step.id.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())
    hashes[hash] = step
  })
  return hashes
}

export function resolveHashStep(hashes) {
  // Get hash and remove #
  const hash = window.location.hash.slice(1)
  return hashes[hash]
}

export function updateHash(hashes, activeStep) {
  const hash = Object.keys(hashes).find(key => hashes[key].id === activeStep.id)
  window.location.hash = hash
}
