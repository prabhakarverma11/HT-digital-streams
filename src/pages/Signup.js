import React, {Component} from 'react';
import Page from './Page';
import SignupContainer from '../containers/signup/Signup';

class Signup extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'Signup ';
    }

    pageMeta() {
        return [
            {name: 'description', content: 'A reactGo example of a login or register page'}
        ];
    }

    pageLink() {
        return [];
    }

    render() {
        return (
            <Page {...this.getMetaData()}>
                <div className="app app-header-fixed ">
                    <SignupContainer {...this.props} />
                </div>
            </Page>
        );
    }
}

export default Signup;
