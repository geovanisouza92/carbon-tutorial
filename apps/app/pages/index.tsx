import { Button, Content } from 'carbon-components-react';
import TutorialHeader from '../components/TutorialHeader';
import './index.module.scss';

export function Index() {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
}

export default Index;
