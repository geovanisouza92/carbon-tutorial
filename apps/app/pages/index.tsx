// import { Button, Content } from 'carbon-components-react';
// import TutorialHeader from '../components/TutorialHeader';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={"bx--grid bx--grid--full-width " + styles.page}>
      <div className={"bx--row " + styles.page__banner}>
        <div className="bx--col-lg-16">1</div>
      </div>
      <div className={"bx--row " + styles.page__r2}>
        <div className="bx--col-md-4 bx--col-lg-7">7/16</div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">8/16</div>
      </div>
      <div className={"bx--row " + styles.page__r3}>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
      </div>
    </div>
  );
}

export default Index;
