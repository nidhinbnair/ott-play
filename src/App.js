import { Badge, Button, Col, Input, Modal, PageHeader, Row } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import backIcon from "../src/assets/images/Back.png";
import searchIcon from "../src/assets/images/search.png";
import { useDispatch, useSelector } from 'react-redux';
import actions from '../src/redux/Media/actions'
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';

const { loadData, updateState, searchInData } = actions;
const GridItem = React.lazy(() => import('./components/gridItem'))

function App() {
  const { medias, page, search, filter_active, filtered_medias } = useSelector(state => state.media)
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(1));
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('scroll', loadMore);
    }, 2000);
    return () => {
      window.removeEventListener('scroll', loadMore);
    }
  }, [page])

  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
      dispatch(updateState({ page: page + 1 }));
      dispatch(loadData(page + 1));
    }
  }

  return (
    <div className="App">
      <PageHeader
        style={{ alignItems: 'center' }}
        backIcon={<img className='global-src-icon-size' src={backIcon} alt={'back'} />}
        className="site-page-header"
        onBack={() => null}
        title="Romantic Comedy"
        extra={<Badge dot={filter_active}>
          <img onClick={() => { setVisible(!visible) }} className='global-src-icon-size' src={searchIcon} alt={'search'} />
        </Badge>}
      />
      <div>
        <Row gutter={[40, 16]}>
          {(filter_active ? filtered_medias : medias).map((it, index) => {
            return (<Col key={`media-${index}`} span={8} >
              <Suspense fallback={<LoadingOutlined />}><GridItem image={it['poster-image']} title={it?.name || "No Name"} /></Suspense>
            </Col>)
          })}
        </Row>
      </div>
      <Modal width={370} style={{ top: 20 }} wrapClassName="custom-modal" closable={false} footer={false} open={visible} onOk={() => setVisible(!visible)} onCancel={() => setVisible(!visible)}>
        <span style={{ display: 'flex' }}><Input allowClear value={search} onChange={e => { dispatch(updateState({ search: e.target.value })) }} size="small" placeholder="Search Here" bordered={false} /> <Button onClick={() => { dispatch(searchInData(search)); setVisible(!visible) }} type="primary" shape="circle" icon={<SearchOutlined />} /></span>
      </Modal>
    </div>
  );
}

export default App;
