import packageJson from '../../package.json'

export const AppHeader = () => {
    return (
        <h1 style={{textAlign: 'center'}}>
            つるかめざん v{packageJson.version}
        </h1>
    )
}