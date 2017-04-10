import React, {Component} from 'react';
import Page from './Page';
import LogoutContainer from '../containers/logout/Logout';

class Logout extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'Logout';
    }

    pageMeta() {
        return [
            {name: 'description', content: 'A reactGo example of a logout or register page'}
        ];
    }

    pageLink() {
        return [];
    }

    render() {
        return (
            <Page {...this.getMetaData()}>
                <div className="app app-header-fixed ">
                    <LogoutContainer {...this.props} />
                </div>
            </Page>
        );
    }
}

export default Logout;
