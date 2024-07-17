'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsBasic = () => {
    const showAlert = async () => {
        await Swal.fire({
            title: 'Saved successfully',
            padding: '2em',
            customClass: {
                container: 'sweet-alerts',
            },
        });
    };

    return (
        <PanelCodeHighlight
            title="Basic message"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    await Swal.fire({
        title: 'Saved successfully',
        padding: '2em',
        customClass: {
            container: 'sweet-alerts',
        },
    });
};

<div className="flex items-center justify-center">
    <button type="button" className="btn btn-primary" onClick={showAlert}>
        Basic message
    </button>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-primary" onClick={showAlert}>
                        Basic message
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsBasic;
