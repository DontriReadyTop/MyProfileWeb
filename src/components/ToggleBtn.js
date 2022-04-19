import './ToggleBtn.css';

function ToggleBtn({ toggled, handldClick }) {
    return (
        <div className={`toggle ${toggled ? "dark" : ""}`} onClick={handldClick}>
            <div className='notch'>
                <div className='crater' />
                <div className='crater' />
            </div>
            <div>
                <div className='shape sm' />
                <div className='shape sm' />
                <div className='shape md' />
                <div className='shape lg' />
            </div>
        </div>
    );
}

export default ToggleBtn;