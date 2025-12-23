import Pots from './Pots/Pots';

function PostSection() {
    return (
        <section className="section post-section">
            <div className="section__header">
                <h4 className="section__title">Post</h4>
                <a className="section__link" href="#">
                    See Details
                    <svg
                        fill="none"
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.85375 0.146648L5.85375 5.14665L0.85375 10.8541"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>

            <div className="section__content">
                <Pots/>
            </div>
        </section>
    );
}

export default PostSection;
