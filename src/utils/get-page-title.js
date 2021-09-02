import defaultSettings from '@/settings'

const title = defaultSettings.title || 'CRM System'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
