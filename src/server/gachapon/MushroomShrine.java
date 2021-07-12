package server.gachapon;

/**
 *
 * @author SharpAceX(Alan)
 */
public class MushroomShrine extends GachaponItems {

    @Override
    public int[] getCommonItems() {
        return new int[]{
            1382011, 1332024, 1302022, 1302021, 1462006, 1402009, 1402010, 1322012, 1312013, 1472008,
            1432008, 1050100, 1051098,};
    }

    @Override
    public int[] getUncommonItems() {
        //All Scrolls
        return new int[]{
            2043015, 2043017, 2043019, 2044000, 2044001, 2044002, 2044004, 2044005, 2044010, 2044012,
            2044014, 2043200, 2043201, 2043202, 2043204, 2043205, 2043210, 2043212, 2043214, 2044200,
            2044201, 2044202, 2044204, 2044205, 2044210, 2044212, 2044214, 2044300, 2044301, 2044302,
            2044304, 2044305, 2044310, 2044312, 2044314, 2044400, 2044401, 2044402, 2044404, 2044405,
            2044410, 2044412, 2044414,
            2043800, 2043801, 2043802, 2043804, 2043805, 2043700, 2043701, 2043702, 2043704, 2043705,
            2044605, 2044604, 2044602, 2044601, 2044600, 2044505, 2044504, 2044502, 2044501, 2044500,
            2044700, 2044701, 2044702, 2044704, 2044705, 2043300, 2043301, 2043302, 2043304, 2043305,
            2044800, 2044801, 2044802, 2044803, 2044804, 2044805, 2044807, 2044809, 2044900, 2044901,
            2044902, 2044903, 2044904,};
    }

    @Override
    public int[] getRareItems() {
        return new int[]{};
    }

}
