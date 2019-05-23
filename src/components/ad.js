import React from 'react'

class AdComponent extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    render() {
        return (
            <ins className='adsbygoogle'
                data-ad-client="ca-pub-9376266750696675"
                enable-page-level-ads= "true"/>
        );
    }
}

export default AdComponent