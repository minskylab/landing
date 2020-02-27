import { Envelope } from "./types";

export const envelopeToPlain = (envelope: Envelope): string => {
    if (typeof envelope === "undefined") {
        return "";
    }

    if (envelope.all) {
        return `${envelope.all}`;
    }

    if (envelope.x || envelope.y) {
        return `${envelope.y || 0} ${envelope.x || 0} ${envelope.y || 0} ${envelope.x || 0}`;
    }

    return `${envelope.top || "0"} ${envelope.right || "0"} ${envelope.bottom || "0"} ${envelope.left || "0"}`;
};
