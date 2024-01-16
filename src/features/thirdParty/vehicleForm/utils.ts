import {VehicleType} from "@features/thirdParty/_common/types";

export function normalizeVehicleTypes(vehicleTypes: VehicleType[]) {
    return vehicleTypes.slice().reduce<Record<number, VehicleType|undefined>>((previousValue, currentValue) => {
        return previousValue[currentValue.id] = currentValue;},{})
}