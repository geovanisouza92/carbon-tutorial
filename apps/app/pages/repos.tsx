import classNames from 'classnames';

import RepoTable from '../components/RepoTable';

import styles from './repos.module.scss';

const headers = [{
  key: 'name',
  header: 'Name',
}, {
  key: 'createdAt',
  header: 'Created',
}, {
  key: 'updatedAt',
  header: 'Updated',
}, {
  key: 'issueCount',
  header: 'Open issues',
}, {
  key: 'stars',
  header: 'Stars',
}, {
  key: 'links',
  header: 'Links',
}];

const rows = [{
  id: '1',
  name: 'Repo 1',
  createdAt: 'Date',
  updatedAt: 'Date',
  issueCount: '123',
  stars: '456',
  links: 'Links',
}, {
  id: '2',
  name: 'Repo 2',
  createdAt: 'Date',
  updatedAt: 'Date',
  issueCount: '123',
  stars: '456',
  links: 'Links',
}, {
  id: '3',
  name: 'Repo 3',
  createdAt: 'Date',
  updatedAt: 'Date',
  issueCount: '123',
  stars: '456',
  links: 'Links',
}];

export function Repos() {
  return (
    <div className={classNames("bx--grid bx--grid--full-width bx--grid--no-gutter", styles.page)}>
      <div className={classNames("bx--row", styles.page__r1)}>
        <div className="bx--col-lg-16">
          <RepoTable headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
}

export default Repos;
