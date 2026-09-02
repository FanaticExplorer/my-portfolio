const freelancehuntProfile = 'https://freelancehunt.com/freelancer/FanaticExplorer.html'

export function getFreelancehuntProfileUrl(language: string) {
  const locale = language.split('-')[0]

  if (locale === 'en') {
    return 'https://freelancehunt.com/en/freelancer/FanaticExplorer.html'
  }

  if (locale === 'uk') {
    return 'https://freelancehunt.com/ua/freelancer/FanaticExplorer.html'
  }

  return freelancehuntProfile
}
