import { Vector3, Vector2 } from 'three';
import { Math as THREEMath } from 'three';
import { checkIntersection } from 'line-intersect';

export class Utils {
    /** Creates a Guide.
     * @returns A new Guide.
     */
    static uid() {
        var tS4 = function() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        };
        return tS4() + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + tS4() + tS4();
    }
}