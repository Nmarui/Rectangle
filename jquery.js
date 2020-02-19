$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $brnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

    //calc button click even
    $btnCal.click(function(){
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = 2 * (w + h),
            a = w * h;
        //output
        $perimeter.val(p);
        $area.val(a);
    });

    
});