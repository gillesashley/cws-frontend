'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsCustomImage = () => {
    const showAlert = async () => {
        await Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: '/assets/images/custom-swal.svg',
            imageWidth: 224,
            imageHeight: 'auto',
            imageAlt: 'Custom image',
            padding: '2em',
            customClass: {
                container: 'sweet-alerts',
            },
        });
    };

    return (
        <PanelCodeHighlight
            title="Message with custom image"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    await Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: '/assets/images/custom-swal.svg',
        imageWidth: 224,
        imageHeight: 'auto',
        imageAlt: 'Custom image',
        padding: '2em',
        customClass: {
            container: 'sweet-alerts',
        },
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-secondary" onClick={showAlert}>
            Message with custom image
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-secondary" onClick={showAlert}>
                        Message with custom image
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsCustomImage;
