import { NgIf } from "@angular/common";
import { Component, inject, computed } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";
import { AuthDirective } from "./auth/auth.directive";
import { AuthService } from "./auth/auth.service";
import { LearningResourcesComponent } from "./learning-resources/learning-resources.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, NgIf, AuthDirective],
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
  isUser = computed(() => this.authService.activePermission() === 'user');
}
