'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsCustomAnimation = () => {
    const showAlert = async () => {
        await Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
                popup: 'animate__animated animate__flip',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            padding: '2em',
            customClass: {
                container: 'sweet-alerts',
            },
        });
    };
    return (
        <PanelCodeHighlight
            title="Custom animation"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    await Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
            popup: 'animate__animated animate__flip',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
        padding: '2em',
        customClass: {
            container: 'sweet-alerts',
        },
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={showAlert}>
            Custom animation
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-info" onClick={showAlert}>
                        Custom animation
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsCustomAnimation;
