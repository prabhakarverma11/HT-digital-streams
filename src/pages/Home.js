import React, {Component} from 'react';
import Page from './Page';
import HomeContainer from '../containers/home/Home';

class Home extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'Home';
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
                    <HomeContainer {...this.props} />
                </div>
            </Page>
        );
    }
}

export default Home;
