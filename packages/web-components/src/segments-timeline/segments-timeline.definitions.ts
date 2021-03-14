export interface IUISegment {
    startSeconds: number;
    endSeconds: number;
    color?: string;
    textColor?: string;
}

export interface IDisplayOptions {
    height: number;
    barHeight?: number;
    tooltipHeight?: number;
    top?: number;
    renderTooltip?: boolean;
    renderProgress?: boolean;
    timeSmoothing?: number;
}

export interface ISegmentsTimelineData {
    segments: IUISegment[];
    duration: number;
}

export interface ISegmentsTimelineConfig {
    data: ISegmentsTimelineData;
    displayOptions: IDisplayOptions;
}
