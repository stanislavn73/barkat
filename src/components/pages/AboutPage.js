import React from 'react';
import Padded from '../ui-kit/Padded/Padded';
import Title from '../ui-kit/Title';
import PlainText from '../ui-kit/PlainText';
import PageImageTitle from '../ui-kit/PageImageTitle/PageImageTitle';
import FadeInWrapper from '../ui-kit/FadeInWrapper';

class AboutPage extends React.PureComponent {
    componentDidMount = () => {
        this.page.parentElement.parentElement.scrollTo(0, 0);
    }

    render() {
        const location = this.props.location.pathname;
        const { screenImg, screenTitle } = this.props.data;

        return (
            <FadeInWrapper ref={node => this.page = node} >
                <FadeInWrapper>
                    <PageImageTitle src={screenImg} title={screenTitle} />
                </FadeInWrapper>
                <Padded>
                    <Title>
                        Норм такой заголовок
                    </Title>
                    <PlainText>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum
                    </PlainText>
                    <PlainText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Risus nec feugiat in fermentum.
                        Faucibus scelerisque eleifend donec pretium vulputate
                        sapien. Vulputate mi sit amet mauris commodo quis
                        imperdiet massa. Suscipit adipiscing bibendum est
                        ultricies integer. Consequat ac felis donec et odi
                        pellentesque. Massa tincidunt dui ut ornare lectus
                        Fermentum leo vel orci porta non. Felis imperdiet
                        proin fermentum leo vel. Cras fermentum odio eu feugiat
                        pretium nibh. Ut faucibus pulvinar elementum integer enim.
                        Viverra maecenas accumsan lacus vel facilisis volutpat est
                        velit egestas. Vestibulum morbi blandit cursus risus.
                        Pellentesque diam volutpat commodo sed egestas egestas
                        fringilla. Integer eget aliquet nibh praesent tristique
                        magna sit. Dictumst vestibulum rhoncus est pellentesque
                        elit ullamcorper dignissim. Integer quis auctor elit sed
                        vulputate. Platea dictumst vestibulum rhoncus est. Etiam
                        non quam lacus suspendisse faucibus interdum. In ornare
                        quam viverra orci sagittis eu.
                    </PlainText>
                    <Title>
                        Норм такой заголовок
                    </Title>
                    <PlainText>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum
                    </PlainText>
                    <PlainText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Risus nec feugiat in fermentum.
                        Faucibus scelerisque eleifend donec pretium vulputate
                        sapien. Vulputate mi sit amet mauris commodo quis
                        imperdiet massa. Suscipit adipiscing bibendum est
                        ultricies integer. Consequat ac felis donec et odi
                        pellentesque. Massa tincidunt dui ut ornare lectus
                        Fermentum leo vel orci porta non. Felis imperdiet
                        proin fermentum leo vel. Cras fermentum odio eu feugiat
                        pretium nibh. Ut faucibus pulvinar elementum integer enim.
                        Viverra maecenas accumsan lacus vel facilisis volutpat est
                        velit egestas. Vestibulum morbi blandit cursus risus.
                        Pellentesque diam volutpat commodo sed egestas egestas
                        fringilla. Integer eget aliquet nibh praesent tristique
                        magna sit. Dictumst vestibulum rhoncus est pellentesque
                        elit ullamcorper dignissim. Integer quis auctor elit sed
                        vulputate. Platea dictumst vestibulum rhoncus est. Etiam
                        non quam lacus suspendisse faucibus interdum. In ornare
                        quam viverra orci sagittis eu.
                    </PlainText>
                </Padded>
            </FadeInWrapper>
        );
    }
}

export default AboutPage;
