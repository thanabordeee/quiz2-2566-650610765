export const PostOwner = ({userImagePath,
  username,
  commentText,
  likeNum,}) => {
  return <div><div>
  <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/vv.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">Thanabordee Sornchai 650610765</span>
      </div>

      <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">100 คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  {/* map-loop render Reply component here */}
</div></div>;
};
