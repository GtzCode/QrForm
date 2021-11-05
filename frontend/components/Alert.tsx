export interface propsAltert {
    type: 'alert' | 'success' | 'warning' | 'danger';
    icon?: boolean;
    title: string;
    text?: string;
    subtext?: string;
}

export default function Alert({type,icon,title,text,subtext}: propsAltert) {
    
    var vlColor: string = 'alert alert-primary';
    var vlIcon: string = 'fas fa-info-circle fa-2x';

    if (type == 'alert') {
        vlColor = 'alert alert-primary';
        vlIcon = 'fas fa-info-circle';
    } else if (type == 'success') {
        vlColor = 'alert alert-success';
        vlIcon = 'fas fa-check-circle';
    } else if (type == 'warning') {
        vlColor = 'alert alert-warning';
        vlIcon = 'fas fa-exclamation-triangle';
    } else if (type == 'danger') {
        vlColor = 'alert alert-danger';
        vlIcon = 'fas fa-times-circle';
    }

    return (
        <section>
            <div className="card">
                <div className="card-body">
                    <div className={vlColor} role="alert">
                        <h2 className="alert-heading">
                            {icon ? (
                                <section>
                                    <i className={vlIcon + ' fa-1x'} />{' '}
                                    <span>{title}</span>
                                </section>
                            ) : (
                                <section>
                                    <span>{title}</span>
                                </section>
                            )}
                        </h2>

                        {text ? (
                            <section>
                                <p>{text}</p>
                            </section>
                        ) : (
                            <section />
                        )}

                        {subtext ? (
                            <section>
                                <hr />
                                <p className="mb-0">{subtext}</p>
                            </section>
                        ) : (
                            <section />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

Alert.defaultProps = {
    type: 'alert',
    icon: true,
    title: 'Alrte',
    text: '',
    subtext: ''
};
