import React from 'react';
import usePopover from '@/_hooks/use-popover';
import { LeftSidebarItem } from './SidebarItem';

export const LeftSidebarGlobalSettings = ({ globalSettings, globalSettingsChanged }) => {
  const [open, trigger, content] = usePopover(false);
  const { hideHeader, canvasMaxWidth, canvasBackgroundColor } = globalSettings;
  return (
    <>
      <LeftSidebarItem
        tip="Global settings"
        {...trigger}
        icon="settings"
        className={`left-sidebar-item ${open && 'active'}`}
      />
      <div {...content} className={`card popover global-settings-popover ${open ? 'show' : 'hide'}`}>
        <div style={{ marginTop: '1rem' }} className="card-body">
          <div>
            <div className="d-flex mb-3">
              <span>Hide header for launched apps</span>
              <div className="ms-auto form-check form-switch position-relative">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={hideHeader}
                  onChange={(e) => globalSettingsChanged('hideHeader', e.target.checked)}
                />
              </div>
            </div>
            <div className="d-flex mb-3">
              <span className="w-full">Max width of canvas</span>
              <div className="ms-auto form-check form-switch position-relative">
                <div className="input-with-icon">
                  <input
                    type="text"
                    className={`form-control form-control-sm`}
                    placeholder={'Enter canvas max-width'}
                    onChange={(e) => {
                      globalSettingsChanged('canvasMaxWidth', e.target.value);
                    }}
                    value={canvasMaxWidth}
                  />
                  <span className="input-group-text">px</span>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <span className="w-full">Background color of canvas</span>
              <div>
                <input
                  type="text"
                  className={`form-control form-control-sm`}
                  placeholder={'Enter canvas background color'}
                  onChange={(e) => {
                    globalSettingsChanged('canvasBackgroundColor', e.target.value);
                  }}
                  value={canvasBackgroundColor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};