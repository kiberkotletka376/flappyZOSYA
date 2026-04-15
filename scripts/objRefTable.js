const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Touch,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Text.Acts.AddInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{ТайловыйФон: 0},
	{Платформер: 0},
	{Спрайт: 0},
	{Тач: 0},
	{Пуля: 0},
	{Спрайт2: 0},
	{Спрайт3: 0},
	{Переменная1: 0},
	{Текст: 0},
	{Аудио: 0}
];

self.InstanceType = {
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	Аудио: class extends self.IInstance {}
}