import cls from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={cls.loader}>
      {Array.from(new Array(3)).map((_, index) => (
        <span key={index} className={cls.dot}>
          .
        </span>
      ))}
    </div>
  )
}
