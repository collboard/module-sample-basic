import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '@collboard/modules-sdk';
import * as React from 'react';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: 'SampleButton',
            title: { en: 'Hello world' },
            description: {
                en: 'Simple sample hello world button for Collboard.com',
            },
            keywords: [],
            categories: ['Productivity', 'Buttons', 'Template'],
            icon: '/assets/icons/copy-material.svg',
        },
        place: ExtraJsxPlace.EdgeRight,
        createExtraJsx() {
            return (
                <button
                    onClick={async () => {
                        alert(`Hello from Collboard modules!`);
                    }}
                    className="button button-primary button-vertical"
                >
                    Test
                </button>
            );
        },
    }),
);
