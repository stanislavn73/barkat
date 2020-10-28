import React from 'react';
import cx from 'classnames';
import './SecondScreen.less';

class IconsFader extends React.PureComponent {
    state = {
        order: 0,
        fadeIn: false,
        fadeOut: false
    }

    componentDidMount = () => {
        const icons = this.props.children;
        const { delay } = this.props;

        setTimeout(
            () => {
                this.handleChangeOrder();
                setInterval(this.handleChangeOrder, 5000);
            },
            delay ? delay : 0
        );
    }

    handleChangeOrder = () => {
        const icons = this.props.children;

        this.setState(prev => ({ order: (prev.order + 1) % icons.length, fadeIn: true }));

        setTimeout(() => this.setState({ fadeIn: false }), 3500);
    }

    render() {
        const { order, fadeIn } = this.state;

        const Item = this.props.children[order];
        const fadeCX = cx({
            'fade-default': true,
            'fade-in': fadeIn
        });

        return (
            <div className={fadeCX}>
                {Item}
            </div>
        );
    }
}

export default IconsFader;
