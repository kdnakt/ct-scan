import packageJson from '../../package.json'

export const AppFooter = () => {
    return (
        <footer className="app_footer" >
            v{packageJson.version}&nbsp;
            &copy;&nbsp;2023&nbsp;
            <a href="https://twitter.com/kdnakt">kdnakt</a>
        </footer>
    )
}