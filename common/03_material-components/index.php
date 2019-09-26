<?php
	$exa_center1 = (!empty($_POST['exa_center1'])) ?$_POST['exa_center1'] : '';
	$exa_center2 = (!empty($_POST['exa_center2'])) ?$_POST['exa_center2'] : '';

	$displays['entry']['item']['exa_center'] = [
		'0000' => 'あああ',
		'0071' => '中山住宅ローンセンター',
		'0074' => '川崎住宅ローンセンター',
		'0075' => '自由が丘住宅ローンセンター',
		'0076' => '蒲田住宅ローンセンター',
		'0080' => '藤沢住宅ローンセンター',
		'0081' => '横浜駅前住宅ローンセンター',
		'0082' => '厚木住宅ローンセンター',
		'0083' => '町田住宅ローンセンター',
		'0084' => 'あざみ野住宅ローンセンター',
		'0085' => '横須賀住宅ローンセンター',
		'0087' => '二俣川住宅ローンセンター',
		'0089' => '溝口住宅ローンセンター',
		'0090' => '相模原駅前住宅ローンセンター',
		'0091' => '東戸塚駅前住宅ローンセンター',
		'0092' => '上大岡住宅ローンセンター',
		'0093' => '平塚住宅ローンセンター',
		'0094' => '新百合ケ丘住宅ローンセンター',
		'0095' => '綱島住宅ローンセンター',
		'0098' => '大和住宅ローンセンター',
		'0099' => '茅ヶ崎住宅ローンセンター',
	];
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

	<!-- jquery-3.3.1 -->
	<script src="../plugins/jquery-3.3.1.min.js"></script>

	<!-- bootstrap -->
	<link href="../plugins/bootstrap/css/bootstrap.css" rel="stylesheet">

	<!-- webフォント : noto sans jp -->
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&amp;display=swap&amp;subset=japanese" rel="stylesheet">

	<!-- 独自ｃｓｓ -->
	<link href="./css/all.css" rel="stylesheet">

	<!-- Required styles for MDC Web -->
	<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
	<!-- <link href="./plugins/material-components-web.css" rel="stylesheet"> -->

</head>
<body>

<br>
<span>POSTデータ</span>
<br>

<pre>
<?php
	var_dump($_POST);
?>
</pre>


<!-- Render textfield component -->
<form method="post">

<br>
<span>select版（通常</span>
<br>

<div class="d-flex">
	<div>
    	<select id="exa_center" name="exa_center1" class="form-control">
    	    <option value="">選択してください</option>
    	<?php foreach ($displays['entry']['item']['exa_center'] as $key => $val): ?>
    	    <option value="<?=$key?>" <?=($key) == ($exa_center1) ? 'selected' : ''?>><?=($val)?></option>
    	<?php endforeach;?>
		</select>
		<div class="border-control"></div>
	</div>
</div>


<div style="display:none;">
	要件：PC, iOS, androidでレイアウトをそろえる（デザイン通り）
	　　　arrow（右側▽）が参考URLのようになること（最低限：activeで上三角になる。理想：アニメーションで上三角と下三角が入れ替わる）
	案１．HTML+CSS+JSで対応
	案２．jQueryプラグインを調査、動作確認
	案３．material-componentを使えるようになって適用する
　　　　※下記サンプルはレイアウトが違う。
	https://material-components.github.io/material-components-web-catalog/#/component/select
	Outlined Enhancedが望ましいが、

</div>


<br>
<span>material-component select（arrowサンプル）</span>
<br>

<!-- <div class="mdc-select" style="width:400px;"> -->
<div class="mdc-select">
	<input type="hidden" name="exa_center2" value="<?=$exa_center2?>">
	<i class="mdc-select__dropdown-icon"></i>
	<div class="mdc-select__selected-text"></div>
	<div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
		<ul class="mdc-list">
	  		<li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
		<?php foreach ($displays['entry']['item']['exa_center'] as $key => $val): ?>
			<li class="mdc-list-item" data-value="<?=$key?>"><?=($val)?></li>
    	<?php endforeach;?>
		</ul>
	</div>
	<span class="mdc-floating-label">選択してください</span>
	<div class="mdc-line-ripple"></div>
</div>



<br>
<br>
<br>

<button type="submit">送信</button>

</form>








<!-- Required MDC Web JavaScript library -->
<!-- <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script> -->
<script src="./plugins/material-components-web.js"></script>

<!-- Instantiate single textfield component rendered in the document -->
<script>
	mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));

	// const select = new MDCSelect(document.querySelector('.mdc-select'));

	// select.listen('MDCSelect:change', () => {
	// 	alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
	// });

</script>
</body>
</html>