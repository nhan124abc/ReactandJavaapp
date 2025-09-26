import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-4">Oops! Trang bạn tìm không tồn tại.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Về Trang Chủ
      </Link>
    </div>
  );
}
