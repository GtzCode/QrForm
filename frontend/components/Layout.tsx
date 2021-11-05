import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children,title,description }) {
    return (
        <section>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <Link href="/">
                    <a className="navbar-brand">QRForm</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/options">
                                <a className="nav-link">Opciones / Options</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/datadisplay">
                                <a className="nav-link">Data/Datos</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <main>{children}</main>

            <footer></footer>
        </section>
    );
}

Layout.defaultProps = {
    title: 'QRForm',
    description:'Data QR Form'
}
