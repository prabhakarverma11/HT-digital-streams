import React, {Component} from 'react';
import Page from './Page';
import AboutContainer from '../containers/about/About';

class About extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'About ';
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
                    <AboutContainer {...this.props} />
                </div>
            </Page>
        );
    }
}

export default About;