import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

interface User {
  name: string;
  avatar: string;
  id: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
