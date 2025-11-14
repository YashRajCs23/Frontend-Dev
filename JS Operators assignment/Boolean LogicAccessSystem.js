let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;
let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

isOwnerInside = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("After owner leaves:", isSecure ? "Secure" : "Unsafe");