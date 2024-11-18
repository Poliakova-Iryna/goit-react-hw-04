import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({onLoadMore}) => {
  return (
    <div>
        <button className={s.LoadMoreBtn} onClick={onLoadMore}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn;