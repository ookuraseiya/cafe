export const RichEditor = ({ post }) => {
  return (
    <>
      {post.richEditor && post.richEditor ? (
        <div className="richEditor">
          <div dangerouslySetInnerHTML={{ __html: post.richEditor }}></div>
        </div>
      ) : null}
    </>
  );
};
