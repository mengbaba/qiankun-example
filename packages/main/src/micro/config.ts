
export const microApp = [
    {
        name: 'micro-vue',
        entry: 'http://localhost:7101/',
        container: '#sub-view',
        activeRule: '/micro-vue',
        default: true
    },
    {
        name: 'micro-react',
        entry: 'http://localhost:7102/',
        container: '#sub-view',
        activeRule: '/micro-react'
    },
]

export function getMicroDefaultApp() {
    return microApp.find(item => item.default) || null
}






