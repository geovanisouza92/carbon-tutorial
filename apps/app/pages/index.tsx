import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import classNames from 'classnames';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'navigation',
    tabIndex: 0,
  },
};

export function Index() {
  return (
    <div className={classNames("bx--grid bx--grid--full-width bx--grid--no-gutter", styles.page)}>
      <div className={classNames("bx--row", styles.page__banner)}>
        <div className="bx--col-lg-16">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash aria-label="Page navigation">
              <BreadcrumbItem>
                <Link href="/">Getting started</Link>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className={styles.page__heading}>Design &amp; build with Carbon</h1>
          </div>
        </div>
      </div>
      <div className={classNames("bx--row", styles.page__r2)}>
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className={classNames("bx--row", styles.page__tabContent)}>
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className={styles.page__subheading}>What is Carbon?</h2>
                    <p className={styles.page__p}>
                      Carbon is IBM’s open-source design system for digital
                      products and experiences. With the IBM Design Language
                      as its foundation, the system consists of working code,
                      design tools and resources, human interface guidelines,
                      and a vibrant community of contributors.
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <Image
                      src="/tab-illo.png"
                      alt="Carbon illustration"
                      width={350}
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className={classNames("bx--row", styles.page__tabContent)}>
                  Rapidly build beautiful and accessible experiences. The Carbon kit
                  contains all resources you need to get started.
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className={classNames("bx--row", styles.page__tabContent)}>
                  Carbon provides styles and components in Vanilla, React, Angular,
                  and Vue for anyone building on the web.
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className={classNames("bx--row", styles.page__r3)}>
        <div className="bx--col-md-4 bx--col-lg-4">
          <div className={styles.page__label}>The Principles</div>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Open</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div>
      </div>
    </div>
  );
}

export default Index;
